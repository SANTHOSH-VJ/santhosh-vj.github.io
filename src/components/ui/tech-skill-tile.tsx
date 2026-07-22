import Image from "next/image";

export function TechSkillTile({ label, slug, localIcon }: { label: string; slug: string; localIcon?: string }) {
  return (
    <div className="bg-white border border-[#ededed] rounded-xl w-[72px] h-[76px] flex flex-col gap-1.5 items-center justify-center px-1.5 hover:shadow-md transition-shadow duration-200">
      <div className="size-5 flex items-center justify-center relative">
        {localIcon ? (
          <Image src={localIcon} alt={label} fill className="object-contain" />
        ) : (
          <img src={`https://api.iconify.design/${slug}.svg`} alt={label} className="w-full h-full object-contain" />
        )}
      </div>
      <span className="font-['DM_Sans',sans-serif] font-medium text-[#111] text-[9.5px] text-center leading-tight tracking-[-0.19px]">
        {label}
      </span>
    </div>
  );
}
