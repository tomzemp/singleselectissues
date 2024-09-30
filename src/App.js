import { useDataQuery } from '@dhis2/app-runtime'
import {Button, Divider, SingleSelectField, SingleSelectOption} from '@dhis2/ui'
import i18n from '@dhis2/d2-i18n'
import React from 'react'
import classes from './App.module.css'
import { Form } from './Form.js'

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => {
    const { error, loading, data } = useDataQuery(query)

    if (error) {
        return <span>{i18n.t('ERROR')}</span>
    }

    if (loading) {
        return <span>{i18n.t('Loading...')}</span>
    }

    return (
        <div className={classes.container}>
            <h1>{i18n.t('Hello {{name}}', { name: data.me.name })}</h1>
            <h3>{i18n.t('Welcome to DHIS2!')}</h3>
            <Form/>
            <Divider />
            <SingleSelectField label="Aggregation type">
                <SingleSelectOption label="One" value="1" />
                <SingleSelectOption label="Two" value="2" />
                <SingleSelectOption label="Three" value="3" />
            </SingleSelectField>
            <Button>Not form</Button>
        </div>
        
    )
}

export default MyApp
