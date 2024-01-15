import OpenAI from 'openai';
import { openAIKey } from './constants';

const openai = new OpenAI({
  apiKey: openAIKey, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai;