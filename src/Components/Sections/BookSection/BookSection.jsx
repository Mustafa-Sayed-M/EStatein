import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import Budget from './Components/Budget';
import ContactMethod from './Components/ContactMethod';
import FormikInput from '../../Atoms/FormikInput';
import { Formik } from 'formik';
import FormikSelect from '../../Atoms/FormikSelect';
import * as Yup from 'yup';
import FormikMessage from '../../Atoms/FormikMessage';
import FormikSubmit from '../../Atoms/FormikSubmit';

const inputsData = [
    {
        type: "text",
        id: "first-name",
        label: "First Name",
        name: "firstName",
        autoComplete: 'on',
        placeholder: "Enter First Name"
    },
    {
        type: "text",
        id: "last-name",
        label: "Last Name",
        name: "lastName",
        placeholder: "Enter Last Name"
    },
    {
        id: "email",
        type: "email",
        label: "Email",
        name: "email",
        autoComplete: 'on',
        placeholder: "Enter your Email"
    },
    {
        id: "phone",
        type: "tel",
        label: "Phone",
        name: "phone",
        autoComplete: 'on',
        placeholder: "Enter phone Number"
    }
];
const selectsData = [
    {
        id: "location",
        label: "Preferred Location",
        name: "location",
        options: [
            { value: null, label: 'Select Location' },
            { value: 'value1', label: 'Location 1' },
            { value: 'value2', label: 'Location 2' },
            { value: 'value3', label: 'Location 3' }
        ]
    },
    {
        id: "type",
        label: "Property Type",
        name: "type",
        options: [
            { value: null, label: 'Select Property Type' },
            { value: 'value1', label: 'Type 1' },
            { value: 'value2', label: 'Type 2' },
            { value: 'value3', label: 'Type 3' }
        ]
    },
    {
        id: "bathrooms",
        label: "No. of Bathrooms",
        name: "bathrooms",
        options: [
            { value: null, label: 'Select no. of Bathrooms' },
            { value: 'value1', label: '1 Bathrooms' },
            { value: 'value2', label: '2 Bathrooms' },
            { value: 'value3', label: '3 Bathrooms' }
        ]
    },
    {
        id: "bedrooms",
        label: "No. of Bedrooms",
        name: "bedrooms",
        options: [
            { value: null, label: 'Select no. of Bedrooms' },
            { value: 'value1', label: '1 Bedrooms' },
            { value: 'value2', label: '2 Bedrooms' },
            { value: 'value3', label: '3 Bedrooms' }
        ]
    }
];
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    type: '',
    bathrooms: '',
    bedrooms: '',
    budget: '',
    message: '',
};
const validationSchema = {
    firstName: Yup.string().required('First name is a required field').min(4),
    lastName: Yup.string().required('Last name is a required field').min(4),
    email: Yup.string().required('Email is a required field').email('Email must be a valid email'),
    phone: Yup.number().required('Phone is a required field'),
};

function BookSection() {
    return (
        <section className='book-section' id='book'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Let's Make it Happen`}
                    description={`Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.`}
                />
                {/* Book Form */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object(validationSchema)}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        isSubmitting
                    }) => (
                        <form className='p-3 sm:p-5 rounded-md border border-grey-color-15 fields-wrapper grid grid-cols-12 gap-5'>
                            {/* Inputs */}
                            {
                                inputsData.map(((input, index) => <div className='input-col col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3' key={index}>
                                    <FormikInput
                                        {...{
                                            ...input,
                                            onBlur: handleBlur,
                                            onChange: handleChange
                                        }}
                                    />
                                </div>
                                ))
                            }
                            {/* Selects */}
                            {
                                selectsData.map(((select, index) => <div className='select-col col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3' key={index}>
                                    <FormikSelect
                                        {...{
                                            ...select,
                                            onBlur: handleBlur,
                                            onChange: handleChange
                                        }}
                                    />
                                </div>
                                ))
                            }
                            {/* Budget */}
                            <Budget />
                            {/* Contact Method */}
                            <ContactMethod />
                            {/* FormikMessage */}
                            <FormikMessage />
                            {/* Formik Submit */}
                            <FormikSubmit isSubmitting={isSubmitting} />
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default BookSection;