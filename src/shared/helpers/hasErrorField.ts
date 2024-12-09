interface UnknownError {
    data: { error: string }
}

export function hasErrorField(err: unknown): err is UnknownError {
    return (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof err.data === 'object' &&
        err.data !== null &&
        'error' in err.data
    )
}
