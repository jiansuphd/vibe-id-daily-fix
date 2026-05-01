import os
import re

def refactor_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Sequential replacements, more specific first
    replacements = [
        (r'00_meta_MOC\.md', '_meta_MOC.md'),
        (r'10_dailies_MOC\.md', '_dailies_MOC.md'),
        (r'20_wiki_MOC\.md', '_wiki_MOC.md'),
        (r'00_Root_MOC\.md', 'root_MOC.md'),
        (r'Root_MOC\.md', 'root_MOC.md'),
        (r'00_meta/', '_meta/'),
        (r'10_dailies/', '_dailies/'),
        (r'20_wiki/', '_wiki/'),
        (r'00_Root_MOC', 'root_MOC'),
        (r'00_meta', '_meta'),
        (r'10_dailies', '_dailies'),
        (r'20_wiki', '_wiki'),
    ]

    new_content = content
    for pattern, replacement in replacements:
        new_content = re.sub(pattern, replacement, new_content, flags=re.IGNORECASE)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    exclude_dirs = {'.git', 'node_modules', '_site'}
    updated_count = 0
    
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                if refactor_file(file_path):
                    print(f"Updated: {file_path}")
                    updated_count += 1
    
    print(f"Total files updated: {updated_count}")

if __name__ == "__main__":
    main()
