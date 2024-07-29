export const getFormattedDate = (date: Date): string => {
    const padTo2Digits = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    const day = padTo2Digits(date.getDate());
    const month = padTo2Digits(date.getMonth() + 1); // Los meses son indexados desde 0
    const year = date.getFullYear();
    const hours = padTo2Digits(date.getHours());
    const minutes = padTo2Digits(date.getMinutes());
    const seconds = padTo2Digits(date.getSeconds());

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
