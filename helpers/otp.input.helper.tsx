

export const ActivateInput = (input: React.RefObject<HTMLInputElement>) => {
  if (input) {
    console.log(input);
    input.current?.focus();
  }
};
