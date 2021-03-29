/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, 'h:mmaaa (OOOO)');
};

export { formatDate };
