"use client";

import Image from "next/image";
import { getLocalIconPath, getIconifyApiUrl } from "@/lib/icons";

export function TechSkillTile({ label, slug, localIcon }: { label: string; slug: string; localIcon?: string }) {
  const iconSrc = localIcon || getLocalIconPath(slug);
  const fallbackApi = localIcon ? undefined : getIconifyApiUrl(slug);

  return (
    <div className="bg-white border border-[#ededed] rounded-xl w-[72px] h-[76px] flex flex-col gap-1.5 items-center justify-center px-1.5 hover:shadow-md transition-shadow duration-200">
      <div className="size-5 flex items-center justify-center relative">
        {localIcon ? (
          <Image src={localIcon} alt={label} fill sizes="20px" className="object-contain" />
        ) : (
          <img
            src={iconSrc}
            alt={label}
            className="w-full h-full object-contain"
            onError={
              fallbackApi
                ? (e) => {
                    const target = e.currentTarget;
                    if (target.src !== fallbackApi) {
                      target.onerror = null;
                      target.src = fallbackApi;
                    }
                  }
                : undefined
            }
          />
        )}
      </div>
      <span className="font-sans font-medium text-[#111] text-[9.5px] text-center leading-tight tracking-[-0.19px]">
        {label}
      </span>
    </div>
  );
}
