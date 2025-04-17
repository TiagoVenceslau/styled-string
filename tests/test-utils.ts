/**
 * @interface AddAttachParams
 * @description Parameters for adding an attachment to the Jest HTML report.
 * @summary This interface defines the structure of the object used to add attachments to the Jest HTML report.
 * 
 * @property {string | Buffer} attach - The content of the attachment, either as a string or a Buffer.
 * @property {string | object} description - A description of the attachment, can be a string or an object.
 * @property {any} [context] - Optional context information for the attachment.
 * @property {string} [bufferFormat] - Optional format specification for Buffer attachments.
 */
export interface AddAttachParams {
  attach: string | Buffer;
  description: string | object;
  context?: any;
  bufferFormat?: string;
}
/**
 * @interface AddMsgParams
 * @description Parameters for adding a message to the Jest HTML report.
 * @summary This interface defines the structure of the object used to add messages to the Jest HTML report.
 * 
 * @property {string | object} message - The content of the message, either as a string or an object.
 * @property {any} [context] - Optional context information for the message.
 */
export interface AddMsgParams {
  message: string | object;
  context?: any;
}

export const JestReportersTempPathEnvKey = "JEST_HTML_REPORTERS_TEMP_DIR_PATH"

export async function normalizeImport<T>(
  importPromise: Promise<T>,
): Promise<T> {
  // CommonJS's `module.exports` is wrapped as `default` in ESModule.
  return importPromise.then((m: any) => (m.default || m) as T);
}

export async function awaitTimeout(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let addMsgFunction: (arg: AddMsgParams) => Promise<void>;
let addAttachFunction: (arg: AddAttachParams) => Promise<void>;

/**
 * @function importHelpers
 * @description Imports helper functions for adding messages and attachments to Jest HTML reports.
 * @summary This function dynamically imports the necessary helper functions from 'jest-html-reporters/helper'
 * and assigns them to global variables for later use. It uses the {@link normalizeImport} function to
 * handle potential differences between CommonJS and ES Module imports.
 * 
 * @return {Promise<void>} A Promise that resolves when the helper functions have been imported and assigned.
 */
async function importHelpers(): Promise<void> {
  // if (!process.env[JestReportersTempPathEnvKey])
  //   process.env[JestReportersTempPathEnvKey] = './workdocs/reports';
  const { addMsg, addAttach } = await normalizeImport(import('jest-html-reporters/helper'));
  addMsgFunction = addMsg;
  addAttachFunction = addAttach;
}

/**
 * @function addReportMessage
 * @description Adds a message to the Jest HTML report.
 * @summary This function adds a message to the Jest HTML report with a given title and content.
 * It ensures that the helper functions are imported before adding the message.
 * 
 * @param {string} title - The title of the message
 * @param {string | object} message - The content of the message, either as a string or an object
 * @return {Promise<void>} A Promise that resolves when the message has been added to the report
 */
export async function addReportMessage(title: string, message: string | object): Promise<void> {
  if (!addMsgFunction) await importHelpers();
  const msg = `${title}\n${message}`;
  await addMsgFunction({ message: msg });
}

/**
 * @function addReportAttachment
 * @description Adds an attachment to the Jest HTML report.
 * @summary This function adds an attachment to the Jest HTML report with a given title and content.
 * It ensures that the helper functions are imported before adding the attachment.
 * 
 * @param {string} title - The title of the attachment
 * @param {string | Buffer} message - The content of the attachment, either as a string or a Buffer
 * @return {Promise<void>} A Promise that resolves when the attachment has been added to the report
 */
export async function addReportAttachment(title: string, message: string | Buffer): Promise<void> {
  if (!addAttachFunction) await importHelpers();
  const msg = `${title}\n${message}`;
  await addAttachFunction({
    attach: msg,
    description: title,
  });
}