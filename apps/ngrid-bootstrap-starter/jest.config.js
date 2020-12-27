module.exports = {
  name: 'ngrid-bootstrap-starter',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrid-bootstrap-starter',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
