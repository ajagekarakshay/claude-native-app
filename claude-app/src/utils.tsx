// Function to read file and simulate streaming
async function* streamFile(filePath: string, chunkSize: number = 10) {
    const response = await fetch(filePath);
    console.log("Response:", response);
    const reader = response.body?.getReader();
    
    if (!reader) {
      throw new Error("Unable to read file");
    }
  
    const decoder = new TextDecoder();
    let buffer = "";
  
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        if (buffer.length > 0) {
          yield buffer;
        }
        break;
      }
  
      buffer += decoder.decode(value, { stream: true });
  
      while (buffer.length >= chunkSize) {
        yield buffer.slice(0, chunkSize);
        buffer = buffer.slice(chunkSize);
      }
    }
  }

export { streamFile };
