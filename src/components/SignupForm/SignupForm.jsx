import { useLocalStorage } from 'hooks/localStorage';
import { Form, FormLabel, FormTextarea } from './SignupForm.styled';

export function SignupForm() {
  //lazy state initialization
  const [name, setName] = useLocalStorage('name', '');
  const [comment, setComment] = useLocalStorage('comment', '');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'comment':
        setComment(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form>
      <FormLabel>
        <span>Name</span>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </FormLabel>
      <FormLabel>
        <span>Comment</span>
        <FormTextarea
          type="text"
          name="comment"
          value={comment}
          onChange={handleChange}
        ></FormTextarea>
      </FormLabel>
      <button type="submit">Send</button>
    </Form>
  );
}

// #1
//   lazy state initialization
//   only on first render (*this is for start expression)
