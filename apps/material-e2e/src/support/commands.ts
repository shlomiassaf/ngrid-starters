// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// eslint-disable-next-line @typescript-eslint/no-namespace

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      login(email: string, password: string): void;

      matchImageSnapshot(snapShotName?: string, snapShotOptions?: any): void;
      matchImageSnapshot(snapShotOptions: string): void;
    }
  }
}

// Cypress.env('updateSnapshots', true);
addMatchImageSnapshotCommand({
  customSnapshotsDir: 'snapshots',
  customDiffDir: '../../dist/cypress/apps/material-e2e/__diffs__',
  failureThreshold: 0.1, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
});
