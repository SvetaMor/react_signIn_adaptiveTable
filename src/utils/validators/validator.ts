export const isRequired = (value: boolean) => {
    if (value)
      return undefined;
    return 'Поле обязательно для заполнения';
}
