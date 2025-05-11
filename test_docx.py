from lxml import etree

xml_data = '''
<root>
   <element key="value">Content</element>
</root>
'''

root = etree.fromstring(xml_data)
print(etree.tostring(root, pretty_print=True).decode())

