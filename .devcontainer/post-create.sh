#!/bin/bash
set -e

echo "🚀 Setting up EKGF Website dev container..."

# Install pnpm
echo "📦 Installing pnpm..."
npm install -g pnpm@10.10.0

# Verify pnpm installation
if ! command -v pnpm &> /dev/null; then
  echo "❌ Failed to install pnpm"
  exit 1
fi

echo "✅ pnpm installed: $(pnpm --version)"

# Install dependencies
echo "📦 Installing project dependencies..."
pnpm install

echo "✅ Dev container setup complete!"
echo ""
echo "You can now run:"
echo "  - pnpm dev        (start Next.js dev server)"
echo "  - pnpm build      (build for production)"
echo "  - pnpm lint       (run ESLint)"
echo "  - pnpm format     (format code with Prettier)"
