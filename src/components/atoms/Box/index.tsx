import { PropsWithChildren } from "react"

type Size = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8
interface MarginProps {
  m?: Size
  mx?: Size
  my?: Size
  mt?: Size
  mr?: Size
  mb?: Size
  ml?: Size
}
interface PaddingProps {
  p?: Size
  px?: Size
  py?: Size
  pt?: Size
  pr?: Size
  pb?: Size
  pl?: Size
}

type BoxProps = MarginProps & PaddingProps

const toClassName = (key: string, value: unknown) => {
  // return key in exceptions ? exceptions[key](value) : plain(key, value);
  if (typeof value === "boolean") {
    return key
  }
  if (typeof value === "number" || typeof value === "string") {
    return `${key}-${value}`
  }
  if (Array.isArray(value)) {
    return `${key}-${value.join("-")}`
  }
}

/*
  hack to force the JIT to define these styles, likely need to come up with
  something smarter
  "m-0 m-0.5 m-1 m-1.5 m-2 m-2.5 m-3 m-3.5 m-4 m-5 m-6 m-7 m-8"
  "mx-0 mx-0.5 mx-1 mx-1.5 mx-2 mx-2.5 mx-3 mx-3.5 mx-4 mx-5 mx-6 mx-7 mx-8"
  "my-0 my-0.5 my-1 my-1.5 my-2 my-2.5 my-3 my-3.5 my-4 my-5 my-6 my-7 my-8"
  "mt-0 mt-0.5 mt-1 mt-1.5 mt-2 mt-2.5 mt-3 mt-3.5 mt-4 mt-5 mt-6 mt-7 mt-8"
  "mr-0 mr-0.5 mr-1 mr-1.5 mr-2 mr-2.5 mr-3 mr-3.5 mr-4 mr-5 mr-6 mr-7 mr-8"
  "mb-0 mb-0.5 mb-1 mb-1.5 mb-2 mb-2.5 mb-3 mb-3.5 mb-4 mb-5 mb-6 mb-7 mb-8"
  "ml-0 ml-0.5 ml-1 ml-1.5 ml-2 ml-2.5 ml-3 ml-3.5 ml-4 ml-5 ml-6 ml-7 ml-8"
  "p-0 p-0.5 p-1 p-1.5 p-2 p-2.5 p-3 p-3.5 p-4 p-5 p-6 p-7 p-8"
  "px-0 px-0.5 px-1 px-1.5 px-2 px-2.5 px-3 px-3.5 px-4 px-5 px-6 px-7 px-8"
  "py-0 py-0.5 py-1 py-1.5 py-2 py-2.5 py-3 py-3.5 py-4 py-5 py-6 py-7 py-8"
  "pt-0 pt-0.5 pt-1 pt-1.5 pt-2 pt-2.5 pt-3 pt-3.5 pt-4 pt-5 pt-6 pt-7 pt-8"
  "pr-0 pr-0.5 pr-1 pr-1.5 pr-2 pr-2.5 pr-3 pr-3.5 pr-4 pr-5 pr-6 pr-7 pr-8"
  "pb-0 pb-0.5 pb-1 pb-1.5 pb-2 pb-2.5 pb-3 pb-3.5 pb-4 pb-5 pb-6 pb-7 pb-8"
  "pl-0 pl-0.5 pl-1 pl-1.5 pl-2 pl-2.5 pl-3 pl-3.5 pl-4 pl-5 pl-6 pl-7 pl-8"
*/

export default function Box({
  children,
  className,
  ...rest
}: PropsWithChildren<BoxProps & { className?: string }>) {
  const classNames = Object.keys(rest)
    .map((key) => toClassName(key, rest[key as keyof BoxProps]))
    .concat(className ? className : [])
    .join(" ")
  return <div className={classNames}>{children}</div>
}
