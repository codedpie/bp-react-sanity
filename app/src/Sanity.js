import sanityClient from '@sanity/client'

export const clint = sanityClient({
  projectId: 'ckyds9fh',
  dataset: 'production',
  apiVersion: '2023-01-03',
  token: 'skKd1lfOFhUB4IXudDdPkO0unqkbclxAKb3rFwFWWckgGTqFxTjW3WmnQ4ZdLu4m7njXiJBmv2OSOtPRz1PfERWIyEeywGv94K1zdoAxtvmPcrtoEqUwecBHZjIta1c20tOj9sOZrAgmzpDFWQXlozqnqWunt5ftBAxrr94xF94FBoWs3rDj', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})