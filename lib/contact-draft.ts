export function createContactDraft(email: string, fields: FormData) {
  const name = String(fields.get("name") ?? "").trim();
  const replyEmail = String(fields.get("email") ?? "").trim();
  const message = String(fields.get("message") ?? "").trim().replace(/\r?\n/g, "\r\n");
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\r\n\r\n${name}\r\n${replyEmail}`);

  return `mailto:${email}?subject=${subject}&body=${body}`;
}
