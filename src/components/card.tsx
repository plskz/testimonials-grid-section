import { cn } from "@/utils/cn";
import Image from "next/image";

export default function Card({
  name,
  title,
  callout,
  quote,
  image,
  backgroundColor,
}: {
  name: string;
  title: string;
  callout: string;
  quote: string;
  image: string;
  backgroundColor: string;
}) {
  const secondaryFont = backgroundColor === "bg-white" ? "text-primary-20" : "";
  const imageBorder = backgroundColor === "bg-primary-30" ? "ring-primary-10" : "ring-white/50";

  return (
    <div
      className={cn(
        // ! tailwind doesn't read the bg-primary-10 and bg-primary-20 from backgroundColor if I don't use them here. :/
        "space-y-4 rounded-2xl bg-primary-10 bg-primary-20 px-8 py-8 text-white shadow-xl",
        backgroundColor,
        {
          "col-start-1 row-start-1 lg:col-span-2": name === "Daniel Clifford",
          "lg:col-start-3 lg:row-start-1": name === "Jonathan Walters",
          "lg:col-start-1 lg:row-start-2": name === "Jeanette Harmon",
          "lg:col-span-2 lg:col-start-2 lg:row-start-2": name === "Patrick Abrams",
          "md:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1": name === "Kira Whittle",
        },
      )}
    >
      {/* profile, name, title */}
      <div className={cn("flex items-center gap-4", secondaryFont)}>
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className={cn(
            "size-10 rounded-full ring-2 ring-white/50",
            imageBorder,
          )}
        />
        <div className="flex flex-col">
          <p className="font-medium">{name}</p>
          <p
            className={cn({
              "text-primary-20/50": secondaryFont,
              "text-white/50": !secondaryFont,
            })}
          >
            {title}
          </p>
        </div>
      </div>

      {/* callout */}
      <p className={cn("text-2xl font-semibold", secondaryFont)}>{callout}</p>

      {/* quote */}
      <p
        className={cn("text-base", {
          "text-primary-20/70": secondaryFont,
          "text-white/70": !secondaryFont,
        })}
      >
        &quot;{quote}&quot;
      </p>
    </div>
  );
}
