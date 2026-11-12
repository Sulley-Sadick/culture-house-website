export type SocialName = "Instagram" | "Twitter" | "WhatsApp" | "TikTok";

type SocialIconProps = {
  name: SocialName;
  className?: string;
};

/** Simple brand-neutral glyphs for contact social links. */
export function SocialIcon({ name, className = "h-5 w-5" }: SocialIconProps) {
  if (name === "Instagram") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "Twitter") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 4h4.3l4.1 5.7L17.3 4H20l-6.2 7.1L20 20h-4.3l-4.4-6.1L6.7 20H4l6.5-7.5L4 4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "WhatsApp") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 9.4c.3-.6.5-.6.8-.6h.6c.2 0 .4 0 .5.4l.7 1.7c.1.3 0 .5-.2.7l-.4.4c-.2.2-.2.4 0 .6.4.6 1 1.2 1.6 1.6.2.2.5.2.7 0l.4-.4c.2-.2.4-.3.7-.2l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .5-.6.8-.5.3-1.2.4-1.9.2-1.7-.4-3.3-1.6-4.5-3-.7-.8-1.2-1.8-1.4-2.8-.1-.7 0-1.4.3-1.9Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // Classic TikTok mark: cyan/magenta offset + white glyph
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.2 3.5c.4 2.2 1.8 3.9 3.8 4.6v2.3c-1.3-.1-2.5-.5-3.6-1.2v5.5c0 3.2-2.6 5.8-5.8 5.8S2.8 17.9 2.8 14.7c0-3 2.3-5.5 5.2-5.8v2.4c-1.4.3-2.4 1.5-2.4 3 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3.5h2.4Z"
        fill="#25F4EE"
        transform="translate(-0.7 0.4)"
        opacity="0.9"
      />
      <path
        d="M14.2 3.5c.4 2.2 1.8 3.9 3.8 4.6v2.3c-1.3-.1-2.5-.5-3.6-1.2v5.5c0 3.2-2.6 5.8-5.8 5.8S2.8 17.9 2.8 14.7c0-3 2.3-5.5 5.2-5.8v2.4c-1.4.3-2.4 1.5-2.4 3 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3.5h2.4Z"
        fill="#FE2C55"
        transform="translate(0.7 -0.4)"
        opacity="0.9"
      />
      <path
        d="M14.2 3.5c.4 2.2 1.8 3.9 3.8 4.6v2.3c-1.3-.1-2.5-.5-3.6-1.2v5.5c0 3.2-2.6 5.8-5.8 5.8S2.8 17.9 2.8 14.7c0-3 2.3-5.5 5.2-5.8v2.4c-1.4.3-2.4 1.5-2.4 3 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3.5h2.4Z"
        fill="white"
      />
    </svg>
  );
}
