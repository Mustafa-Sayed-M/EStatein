import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import { Formik } from 'formik';
import FormikSubmit from '../../Atoms/FormikSubmit';
import FormikMessage from '../../Atoms/FormikMessage';
import * as Yup from 'yup';
import FormikInput from '../../Atoms/FormikInput';
import FormikSelect from '../../Atoms/FormikSelect';

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
        id: "inquiryType",
        label: "Inquiry Type",
        name: "inquiryType",
        options: [
            { value: null, label: "Select Inquiry Type" },
            { value: "value1", label: "Type 1" },
            { value: "value2", label: "Type 2" },
            { value: "value3", label: "Type 3" }
        ]
    },
    {
        id: "aboutUs",
        label: "How Did You Hear About Us?",
        name: "aboutUs",
        options: [
            { value: null, label: "Select" },
            { value: "value1", label: "Option 1" },
            { value: "value2", label: "Option 2" },
            { value: "value3", label: "Option 3" }
        ]
    },
];
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: ''
};
const validationSchema = {
    firstName: Yup.string().required('First name is a required field').min(4),
    lastName: Yup.string().required('Last name is a required field').min(4),
    email: Yup.string().required('Email is a required field').email('Email must be a valid email'),
    phone: Yup.string().required('Phone is a required field'),
    inquiryType: Yup.string()
        .required('Inquiry Type is a required field')
        .notOneOf([null, ""], 'Please select a valid inquiry type'),
};

function ContactSection() {
    return (
        <section className='contact-section' id='contact'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    title={`Let's Connect`}
                    description={`We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.`}
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
                                inputsData.map(((input, index) => <div className='input-col col-span-12 sm:col-span-6 md:col-span-4' key={index}>
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
                                selectsData.map(((select, index) => <div className='select-col col-span-12 sm:col-span-6 md:col-span-4' key={index}>
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
                            {/* Formik Message */}
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

export default ContactSection;