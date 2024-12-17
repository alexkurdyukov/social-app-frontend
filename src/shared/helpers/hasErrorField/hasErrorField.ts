interface IError {
    data: { error: string };
}

export const hasErrorField = (err: unknown): err is IError => {
    return (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof err.data === 'object' &&
        err.data !== null &&
        'error' in err.data
    );
};
