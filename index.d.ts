import type { Metadata } from "next/types";

/**
 * SKN Next.js Type Extension Library
 *
 * @author SKN Shukhan
 * @version 1.0.2
 * @since 2024-06-10
 * */
declare module "next/types" {
  /**
   * An interface taking a generic that has `params` property of type `Record<T, string>`
   *
   * This type is intended to be used in `Next.js Dynamic Routes`
   * Suppose the dynamic route id is "slug", then use that name in the generic
   *
   * Example:
   *
   * ```typescript jsx
   * import type { ParamProps } from "next/types";
   *
   * // here `React.SC` type is from another package: `@best-skn/react-types`
   * const User: React.SC<ParamProps<"slug">> = async (props) => {
   *   const { slug } = props.params;
   *
   *   return (
   *     <div>something...</div>
   *   );
   * };
   *
   * export default User;
   * ```
   *
   * @since v1.0.0
   * */
  interface ParamProps<T extends string | number | symbol> {
    params: Record<T, string>;
  }

  /**
   * The type for Next.js dynamic route `generateMetadata` function
   *
   * This type is intended to be used in `Next.js Dynamic Routes`
   * Suppose the dynamic route id is "slug", then use that name in the generic
   *
   * Example:
   *
   * ```typescript jsx
   * import type { GenerateMetadata } from "next/types";
   *
   * export const generateMetadata: GenerateMetadata<"slug"> = async (props) => {
   *   const { slug } = props.params;
   *   // some codes here...
   *   return {
   *     // some codes here...
   *   };
   * };
   * ```
   *
   * @since v1.0.0
   * */
  type GenerateMetadata<T extends string | number | symbol> = (
    props: ParamProps<T>
  ) => Promise<Metadata>;

  /**
   * The type for Next.js dynamic route `generateStaticParams` function
   *
   * This type is intended to be used in `Next.js Dynamic Routes`
   * Suppose the dynamic route id is "slug", then use that name in the generic
   *
   * Example:
   *
   * ```typescript jsx
   * import type { GenerateStaticParams } from "next/types";
   *
   * export const generateStaticParams: GenerateStaticParams<"slug"> = async () => {
   *   // your code for generating static params here...
   *   // you'll get type safe dynamic route: `slug`
   * };
   * ```
   *
   * @since v1.0.0
   * */
  type GenerateStaticParams<T extends string | number | symbol> = (
    props: ParamProps<T>
  ) => Promise<Record<T, string>[]>;

  /**
   * The interface for the props of Next.js `error.tsx` default exported function
   *
   * This interface is intended to be used in Next.js `error.tsx` client component
   *
   * Example:
   *
   * ```typescript jsx
   * "use client"
   *
   * import type { NextErrorProps } from "next/types";
   *
   * const Error: React.FC<NextErrorProps> = (props) => {
   *   const { error, reset } = props;
   *   // some codes here...
   *   return (
   *     <div>something...</div>
   *   );
   * };
   *
   * export default Error;
   * ```
   *
   * @since v1.0.0
   * */
  interface NextErrorProps {
    error: Error & {
      digest?: string;
    };
    reset: () => void;
  }
}
