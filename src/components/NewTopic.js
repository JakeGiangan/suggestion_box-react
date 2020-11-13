import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const NewTopic = ({ currentArray }) => {
  const { register, handleSubmit, errors } = useForm();
  const [theArray, setTheArray] = useState(currentArray);

  const onSubmit = (data) => {
    console.log("Submitted Data: ", data);
    console.log("Current Array: ", theArray);
    setTheArray(theArray.push(data));
    console.log("Updated Data: ", theArray);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} className="text-center" style={{ maxWidth: 500 }}>

        {/* Title Field */}
        <div className="form-group">
          <label>Title:</label><br />
          <input
            name="title"
            ref={register({ required: true })}
            type="form-control"
            placeholder="Title"
          />
          {errors.title && <p className="text-danger">This field is required </p>}
        </div>

        {/* Content field */}
        <div className="form-group">
          <label>Content:</label><br />
          <textarea
            name="content"
            ref={register({ required: true })}
            className="form-control"
            placeholder="Content"
          />
          {errors.content && <p className="text-danger">This field is required </p>}

          {/* Current Date field [hidden] */}
          <input
            ref={register}
            name="created_at"
            type="hidden"
            value={new Date().toLocaleString()}
          />

          {/* Index for the new item [hidden] */}
          <input
            ref={register}
            name="index"
            type="hidden"
            value={currentArray.length + 1}
          />

        </div>
        {/* Submit Button */}
        <div className="form-group">
          <button
            ref={register}
            name="submit"
            className="btn btn-success"
            type="submit"
          >
            <i className="fa fa-plus"></i> New Post
          </button>
        </div>
      </Form>
    </Container >
  )
}

export default NewTopic;