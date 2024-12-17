export const formatDateToString = (date?: Date) => {
    if (!date) {
        return '';
    }

    return new Date(date).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};
