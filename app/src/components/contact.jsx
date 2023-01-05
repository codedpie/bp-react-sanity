import ContactSection from "./contactSection"

const Contact = () => {
  const contact_data = {
      title: 'Have an idea?',
      title_highlight: "Let's talk",
      text: "One of the best industry service providers with top tier talented individuals.",
      link: '/contact'
  }

  return <ContactSection bg="bg-shade-blue" contact_data={contact_data} />
}

export default Contact