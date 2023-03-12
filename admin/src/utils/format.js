export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "numeric", hours: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
}