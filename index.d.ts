import type { Metadata } from "next/types";

/**
 * @since 2024-06-10
 */
declare module "next/types" {
  type Params<T extends string | number | symbol> = Record<T, string>;

  interface ParamProps<T extends string | number | symbol> {
    params: Params<T>;
  }

  type GenerateMetadata<T extends string | number | symbol> = (
    props: ParamProps<T>
  ) => Promise<Metadata>;

  type GenerateStaticParams<T extends string | number | symbol> = (
    props: ParamProps<T>
  ) => Promise<Params<T>[]>;

  interface NextErrorProps {
    error: Error & {
      digest?: string;
    };
    reset: () => void;
  }
}
