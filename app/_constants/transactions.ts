import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Comida",
  HEALTH: "Saúde",
  HOUSING: "Habitação",
  OTHER: "Outros",
  SALARY: "Salario",
  TRANSPORTATION: "Transporte",
  UTILITIES: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  PIX: "Pix",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  OTHER: "Outros",
};

export const TRANSACTION_TYPES_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.CASH,
    label: "Dinheiro",
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: "Cartão de Crédito",
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: "Cartão de Débito",
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: "Pix",
  },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: "Transferência Bancária",
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: "Boleto Bancário",
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: "Outros",
  },
];

export const TRANSACTION_CATEGORIES_OPTIONS = [
  {
    value: TransactionCategory.HOUSING,
    label: "Habitação",
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: "Transporte",
  },
  {
    value: TransactionCategory.FOOD,
    label: "Comida",
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: "Entretenimento",
  },
  {
    value: TransactionCategory.HEALTH,
    label: "Saúde",
  },
  {
    value: TransactionCategory.UTILITIES,
    label: "Utilidades",
  },
  {
    value: TransactionCategory.SALARY,
    label: "Salario",
  },
  {
    value: TransactionCategory.EDUCATION,
    label: "Educação",
  },
  {
    value: TransactionCategory.OTHER,
    label: "Outros",
  },
];
