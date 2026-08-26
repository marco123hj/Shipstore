// Content-block types used for the long-form legal / FAQ pages, so all copy
// (both languages) lives in the dictionaries and each page renders from data.
// Strings may contain inline tokens parsed by <RichText>:
//   {{l:/path|label}}   internal link (locale prefix added automatically)
//   {{a:https://..|label}} external link
//   {{f:text}}          highlighted <Fill> placeholder
export type Block =
  | { t: "p"; s: string }
  | { t: "note"; s: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] };

export type Section = { h: string; blocks: Block[] };

export type LegalDoc = {
  title: string;
  intro: string;
  updated?: string;
  sections: Section[];
};

export type Faq = { q: string; a: string };
