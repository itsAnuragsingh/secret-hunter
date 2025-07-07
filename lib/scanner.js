import fs from 'fs';
import {patterns} from '../pattern.js';
import { type } from 'os';

export function scanFile(filePath) {
    // console.log("🔍 Scanning file:", filePath);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const results = [];

    lines.forEach((line,idx)=>{
        patterns.forEach(({name, regex})=>{
            if(regex.test(line)){
                results.push({
                    file:filePath,
                    line:idx+1,
                    type:name,
                    snippet:line.trim()
                })
            }
        })
    })

    return results;

}
