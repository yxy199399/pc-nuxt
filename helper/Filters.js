export default {
  NumberFormat: ts => {
    if (!ts && ts !== 0) return '';
    return ts.toString ().replace (/(\d)(?=(?:\d{3})+$)/g, '$1,');
  },

  PhoneDesensitization: phone => {
    if (!phone) return '';
    const pat = /(\d{3})\d*(\d{4})/;
    const b = phone.replace (pat, '$1****$2');
    return b;
  },
};
