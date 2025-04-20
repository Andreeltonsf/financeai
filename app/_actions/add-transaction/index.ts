"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";
import { addTransactionSchema } from "./schema";

interface AddTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: AddTransactionParams) => {
  const { userId } = await auth();

  addTransactionSchema.parse(params);

  if (!userId) {
    throw new Error("Unathorized");
  }
  await db.transaction.create({
    data: { ...params, userId },
  });

  revalidatePath("/transactions");
};
