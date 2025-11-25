export function validateCPF(cpf) {
  if (!cpf) return false;
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpf)) return false;
  const calc = (t) => {
    let s = 0;
    for (let i = 0; i < t; i++) s += parseInt(cpf.charAt(i)) * (t+1 - i);
    let r = s % 11;
    return (r < 2 ? 0 : 11 - r);
  }
  return calc(9) === parseInt(cpf.charAt(9)) && calc(10) === parseInt(cpf.charAt(10));
}