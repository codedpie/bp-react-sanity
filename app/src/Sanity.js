import sanityClient from '@sanity/client'

export const clint = sanityClient({
  projectId: 'wzrjuu2o',
  dataset: 'production',
  apiVersion: '2023-01-03',
  token: 'skYHL5sG6gEIWsEfn8UqpMzM4U01HMBa2B4qooe2hkMkXlh0rVoLOvrfsMvzqSQ6yNb9Qt325L6GqVOtGKX7Z353L13dcEU2dhlRxFrZpSpYqFPes8OV5PqTS84oQzNaEp3hv6O6d9uOSVAHULEP98MieKQV5ilF0gGG4tTwlt3h93FAGy8p', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})