import {ButtonHTMLAttributes, ReactNode} from "react";

type ExcludeFromTuple<T extends any[], U> = {
  [K in keyof T]: T[K] extends U ? never : T[K];
}[number];

type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
  ? E extends string
    ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
    : never
  : never & NonNullable<unknown>;

export type ButtonProp = ButtonHTMLAttributes<HTMLButtonElement>
  & Partial<{ outline?: boolean; rounded?: boolean }>
  & Exclusive<['primary', 'secondary', 'success', 'warning', 'danger'], boolean>
