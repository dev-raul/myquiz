export function getGreetingMessage(): string {
  const today = new Date();
  const curHr = today.getHours();

  if (curHr < 12) {
    return 'Bom dia';
  } else if (curHr < 18) {
    return 'Boa Tarde';
  }
  return 'Boa noite';
}
