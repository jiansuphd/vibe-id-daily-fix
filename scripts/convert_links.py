import re
import os
import sys

def convert_links(content, file_path):
    # Determine depth
    parts = file_path.split('/')
    depth = len(parts) - 1
    
    # Root path prefix
    root_prefix = "../" * depth
    if not root_prefix:
        root_prefix = "./"
        
    # MOC Mapping
    moc_map = {
        "00_Root_MOC": "root_MOC.md",
        "Root_MOC": "root_MOC.md",
        "10_Issues_MOC": "10_dailies/10_dailies_MOC.md",
        "20_Wiki_MOC": "20_wiki/20_wiki_MOC.md",
        "00_Meta_MOC": "00_meta/00_meta_MOC.md"
    }

    def replacer(match):
        link_part = match.group(1).strip()
        label_part = match.group(3).strip() if match.group(3) else None
        
        # Split link into file and anchor if present
        if '#' in link_part:
            file_name, anchor = link_part.split('#', 1)
            anchor = '#' + anchor
        else:
            file_name = link_part
            anchor = ''
            
        # Handle special MOCs
        if file_name in moc_map:
            target_path = moc_map[file_name]
            
            # Specific overrides based on user rules
            if file_name in ["00_Root_MOC", "Root_MOC"]:
                full_target = root_prefix + "root_MOC.md"
            elif file_name == "00_Meta_MOC":
                if "00_meta/skills/" in file_path:
                    full_target = "../00_meta_MOC.md"
                elif "00_meta/" in file_path:
                    full_target = "00_meta_MOC.md"
                else:
                    full_target = root_prefix + "00_meta/00_meta_MOC.md"
            elif file_name == "10_Issues_MOC":
                if "10_dailies/" in file_path:
                    full_target = "10_dailies_MOC.md"
                else:
                    full_target = root_prefix + "10_dailies/10_dailies_MOC.md"
            elif file_name == "20_Wiki_MOC":
                if "20_wiki/" in file_path:
                    full_target = "20_wiki_MOC.md"
                else:
                    full_target = root_prefix + "20_wiki/20_wiki_MOC.md"
            else:
                full_target = root_prefix + target_path
            
            label = label_part if label_part else file_name
            return f"[{label}]({full_target}{anchor})"

        # Regular links
        if not file_name.endswith('.md') and not anchor and '.' not in file_name:
            file_name += ".md"
            
        label = label_part if label_part else file_name.replace('.md', '')
        
        # URL Encoding for spaces
        url = file_name.replace(' ', '%20')
        return f"[{label}]({url}{anchor})"

    # Regex for [[Link]] or [[Link|Label]]
    pattern = r'\[\[([^\]|]+)(\|([^\]]+))?\]\]'
    return re.sub(pattern, replacer, content)

if __name__ == "__main__":
    for path in sys.argv[1:]:
        if not os.path.exists(path):
            print(f"File not found: {path}")
            continue
        with open(path, 'r') as f:
            content = f.read()
        new_content = convert_links(content, path)
        with open(path, 'w') as f:
            f.write(new_content)
        print(f"Updated {path}")
