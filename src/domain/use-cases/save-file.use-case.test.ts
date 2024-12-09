import fs from 'fs';
import { SaveFile } from './save-file.use-case';

describe('SaveFile', () => {
  afterEach(() => {
    fs.rmSync('outputs', { recursive: true });
  });
  test('should save file with default values', () => {
    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = { fileContent: 'test content' };
    const result = saveFile.execute(options);
    expect(result).toBe(true);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, {
      encoding: 'utf-8',
    });
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });
});
