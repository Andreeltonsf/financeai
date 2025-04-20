"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { ArrowDownUpIcon } from "lucide-react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addTransaction } from "../_actions/add-transaction";
import {
  TRANSACTION_CATEGORIES_OPTIONS,
  TRANSACTION_PAYMENT_METHOD_OPTIONS,
  TRANSACTION_TYPES_OPTIONS,
} from "../_constants/transactions";
import { MoneyInput } from "./money-input-button";
import { Button } from "./ui/button";
import { DatePicker } from "./ui/date-picker";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Nome é obrigatório",
  }),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionType, {
    message: "Tipo de transação é obrigatório",
  }),
  category: z.nativeEnum(TransactionCategory, {
    message: "Categoria de transação é obrigatório",
  }),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
    message: "Método de pagamento é obrigatório",
  }),
  date: z.date({
    message: "A data é obrigatório",
  }),
});

type FormData = z.infer<typeof formSchema>;

export const AddTransactionButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: 0,
      type: TransactionType.EXPENSE,
      category: TransactionCategory.HOUSING,
      paymentMethod: TransactionPaymentMethod.CREDIT_CARD,
      date: new Date(),
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await addTransaction(data);
      setDialogOpen(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={(open) => {
        setDialogOpen(open);
        if (!open) {
          form.reset();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button>
          Adicionar
          <ArrowDownUpIcon className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar transação</DialogTitle>
          <DialogDescription>
            Insira as informações da transação
          </DialogDescription>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nome da transação"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor</FormLabel>
                    <FormControl>
                      <MoneyInput
                        placeholder="Valor da transação"
                        onValueChange={(values) => {
                          field.onChange(values.floatValue);
                        }}
                        className="w-full"
                        onBlur={field.onBlur}
                        disabled={field.disabled}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de transação</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Tipo da transação" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TRANSACTION_TYPES_OPTIONS.map((option) => {
                          return (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Método de pagamento</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o método de pagamento" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TRANSACTION_PAYMENT_METHOD_OPTIONS.map((option) => {
                          return (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TRANSACTION_CATEGORIES_OPTIONS.map((option) => {
                          return (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data</FormLabel>
                    <DatePicker value={field.value} onChange={field.onChange} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DialogClose>

                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
