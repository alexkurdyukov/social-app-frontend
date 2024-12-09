export const formatDateToString = (date?: Date) => {
    if (!date) {
        return ''
    }

    return new Date(date).toLocaleDateString()
}
