"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { TransactionTypeBadge } from "../_compoents/type-badge";

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "method",
    header: "Método",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "value",
    header: "Valor",
  },
  {
    accessorKey: "action",
    header: "",
  },
];
