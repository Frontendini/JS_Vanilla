export function formatDate(date){
    return new Date(date).toLocaleDateString('en-EN', { day: 'numeric', month: 'long', year: 'numeric' })
}