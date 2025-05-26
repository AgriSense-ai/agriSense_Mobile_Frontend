import { useState, useCallback } from "react";

interface OllamaResponse {
  response: string;
  error?: string;
}

const OLLAMA_API_URL = "http://localhost:11434/api/chat";

export function useLanguageModel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const query = useCallback(async (prompt: string): Promise<OllamaResponse> => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(OLLAMA_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama2", // Change to your local model name if different
          prompt,
          stream: true,
        }),
      });

      if (!res.ok) {
        throw new Error(`Ollama API error: ${res.statusText}`);
      }

      const data = await res.json();
      return { response: data.response };
    } catch (err: any) {
      setError(err.message || "Unknown error");
      return { response: "", error: err.message || "Unknown error" };
    } finally {
      setLoading(false);
    }
  }, []);

  return { query, loading, error };
}
