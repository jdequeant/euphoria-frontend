import { default as format } from 'date-fns/format';
import { isValid } from 'date-fns';

export default datetime => {
  if (!datetime || !isValid(new Date(datetime)))
    return;

  return format(new Date(datetime), 'DD/MM/YYYY HH:mm');
};
