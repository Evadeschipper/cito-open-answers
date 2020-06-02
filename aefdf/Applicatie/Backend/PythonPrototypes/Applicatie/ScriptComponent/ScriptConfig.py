import os
class ScriptConfig(object):

    def get_location(self):
        location = os.path.dirname(os.path.realpath(__file__))+"\\Scripts\\"
        return location

    def get_max_number_of_rows(self):
        return 3000

    def get_directory_name(self):
        directory_name = "scripts"
        return directory_name
