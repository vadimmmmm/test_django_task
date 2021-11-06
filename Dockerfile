FROM tiangolo/uwsgi-nginx:python3.9
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install python-dev postgresql-client libssl-dev -y
RUN pip3 install pipenv
RUN mkdir /code
WORKDIR /code
COPY Pipfile /code/
COPY Pipfile.lock /code/
RUN export LC_ALL=C.UTF-8 && export LANG=C.UTF-8 && pipenv lock -r > requirements.txt
RUN pip3 install -r requirements.txt
COPY src /code/
#COPY src/entities/content/management/commands/generate_data.py /code/
RUN apt install -y netcat

EXPOSE 8000