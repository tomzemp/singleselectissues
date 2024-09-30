import {
    ReactFinalForm,
    InputFieldFF,
    SingleSelectFieldFF,
    SwitchFieldFF,
    composeValidators,
    createEqualTo,
    email,
    hasValue,
    Button,
} from '@dhis2/ui'
import React from 'react'
import styles from './Form.module.css'

const alertValues = (values) => {
    const formattedValuesString = JSON.stringify(values, null, 2)
    alert(formattedValuesString)
}

export const Form = () => (
    <div className={styles.container}>

        <ReactFinalForm.Form onSubmit={alertValues}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <ReactFinalForm.Field
                            name="title"
                            label="Title"
                            component={SingleSelectFieldFF}
                            className={styles.title}
                            initialValue="none"
                            options={[
                                { label: 'Professor', value: 'prof' },
                                { label: 'Doctor', value: 'doc' },
                                { label: 'None', value: 'none' },
                            ]}
                        />
                    </div>

                    <div className={styles.row}>
                        <Button type="submit" primary>
                            Submit form
                        </Button>
                    </div>
                </form>
            )}
        </ReactFinalForm.Form>
    </div>
)