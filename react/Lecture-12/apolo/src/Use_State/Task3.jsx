import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    firstName: 'Vishva',
    lastName: 'Hirpara',
    email: 'VishvHirparah@gmail.com',
  });

  return (
    <>
      <div className='mt-10 btn text-black'>
      <label className=''>
        First name:
        <input className='ml-2'
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label className='ml-5'>
        Last name:
        <input className='ml-2'
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label className='ml-5'>
        Email:
        <input className='ml-2'
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p className='mt-4 '>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
      </div>
    </>
  );
}
