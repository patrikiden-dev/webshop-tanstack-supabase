import { useForm } from '@tanstack/react-form'

function ContactForm() {
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: async ({ value }) => {
            // Här skickar du datan (t.ex. till en API)
            console.log('Formulär skickat:', value)
            alert(JSON.stringify(value, null, 2))
        },
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
        >
            <h2>Kontakta oss</h2>

            {/* Namn */}
            <form.Field
                name="name"
                children={(field) => (
                    <div>
                        <label htmlFor={field.name}>Namn</label>
                        <input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    </div>
                )}
            />

            {/* E-post */}
            <form.Field
                name="email"
                children={(field) => (
                    <div>
                        <label htmlFor={field.name}>E-post</label>
                        <input
                            id={field.name}
                            name={field.name}
                            type="email"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    </div>
                )}
            />

            {/* Meddelande */}
            <form.Field
                name="message"
                children={(field) => (
                    <div>
                        <label htmlFor={field.name}>Meddelande</label>
                        <textarea
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            rows={4}
                        />
                    </div>
                )}
            />

            <button type="submit">Skicka</button>
        </form>
    )
}

export default ContactForm