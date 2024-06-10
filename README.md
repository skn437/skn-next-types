# SKN Next.js Type Extension Library

<img width="150px" src="https://firebasestorage.googleapis.com/v0/b/skn-ultimate-project-la437.appspot.com/o/GitHub%20Library%2F09-TypeScript-SNT.svg?alt=media&token=779098df-3836-4a06-b568-31027db5c644" alt="nextjs" />

> TypeScript Next.js

[![NPM Version](https://img.shields.io/npm/v/%40best-skn%2Fnext-types)](https://www.npmjs.com/package/@best-skn/next-types) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)

&nbsp;

## **_Introduction:_**

### This is a simple TypeScript Type Extension Library for Next.js 14

### I made this library so that I can use it in all of my Next.js 14 projects without writing the same codes over and over again

&nbsp;

## **_Details:_**

### **`ParamProps` Type**

- An interface taking a generic that has `params` property of type `Record<T, string>`
- `ParamProps` is the prop type for Next.js dynamic route `page.tsx` default exported server component.
- `ParamProps` generic type is actually a string which is the name of the slug i.e. the name of the dynamic id
- The dynamic id can have names like: "slug", "id" etc. which becomes the directory name like: [slug], [id] etc
- For usage instruction, see `Usage` section

### **`GenerateMetadata` Type**

- `GenerateMetadata` is the type for Next.js dynamic route `generateMetadata` function
- The generic type which is the dynamic id, must match that of `ParamProps` in a certain dynamic route component
- For usage instruction, see `Usage` section

### **`GenerateStaticParams` Type**

- `GenerateStaticParams` is the type for Next.js dynamic route `generateStaticParams` function
- The generic type which is the dynamic id, must match that of `ParamProps` in a certain dynamic route component
- For usage instruction, see `Usage` section

### **`NextErrorProps` Type**

- an interface for Next.js `error.tsx` client component
- `NextErrorProps` is the prop type for `error.tsx` default exported function

&nbsp;

## **_Use Case:_**

- Next.js

&nbsp;

## **_Requirements:_**

- 💀 Minimum React Version: `18`
- 💀 Minimum Next.js Version: `14`

&nbsp;

## **_Usage:_**

### To install the package, type the following in console

> ```zsh
> npm i -D @best-skn/next-types
> #or
> yarn add -D @best-skn/next-types
> #or
> pnpm add -D @best-skn/next-types
> #or
> bun add -D @best-skn/next-types
> ```

### Create a directory called `types` in the root location of your project, and create a file called `next.d.ts`, then do this

> ```typescript
> import "@best-skn/next-types";
> ```

### Check your `tsconfig.json` if `includes` property has `**/*.ts` or not otherwise the type definition file may not work

### Now Inside your Next.js 14 Project, use the package like this (Just an example)

#### **_`ParamProps`, `GenerateMetadata` & `GenerateStaticParams` Types:_**

#### For any dynamic routes, use like this

> ```typescript jsx
> // Location: app/users/[slug]/page.tsx
> // Dynamic id: slug
> import type {
>   GenerateMetadata,
>   GenerateStaticParams,
>   ParamProps,
> } from "next/types";
>
> // Generic type here `slug` as the dynamic id is that
> export const generateMetadata: GenerateMetadata<"slug"> = async (props) => {
>   const { slug } = props.params;
>   // some codes here...
>   return {
>     // some codes here...
>   };
> };
>
> // Generic type here `slug` as the dynamic id is that
> export const generateStaticParams: GenerateStaticParams<"slug"> = async () => {
>   // your code for generating static params here...
>   // you'll get type safe dynamic route: `slug`
> };
>
> // Generic type here `slug` as the dynamic id is that
> // here `React.SC` type is from my another package: `@best-skn/react-types`
> const User: React.SC<ParamProps<"slug">> = async (props) => {
>   const { slug } = props.params; // you'll get a type safe dynamic id name
>
>   return ();
> };
>
> ```

#### **_`NextErrorProps` Type:_**

#### For `error.tsx` files, use like this

> ```typescript jsx
> "use client";
>
> import type { NextErrorProps } from "next/types";
>
> const Error: React.FC<NextErrorProps> = (props) => {
>   const { error, reset } = props;
>   // some codes here...
>   return (
>     <div>something...</div>
>   );
> };
> ```

&nbsp;

## **_Dedicated To:_**

- 👩‍🎨`Prodipta Das Logno` & 🧛‍♀️`Atoshi Sarker Prithula`: The two most special ladies of my life. I
  can't thank them
  enough for always treasuring me a lot. I am lucky that I met with these two amazing ladies. They
  have two special
  places in my heart and no other girl can ever replace them.
- 💯`My Parents`: The greatest treasures of my life ever.

&nbsp;

## **_License:_**

Copyright (C) 2024 SKN Shukhan

Licensed under the MIT License
