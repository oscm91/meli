module.exports = () => {
  process.env.NX_REACT_APP_BASE_HREF = 'http://localhost:4200';
  return {
    autoDetect: true,
    files: ['libs/**/**.ts', 'libs/**/**.test.tsx'],
  };
};
